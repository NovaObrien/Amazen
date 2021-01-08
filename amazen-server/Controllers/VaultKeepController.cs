using System.Threading.Tasks;
using amazen_server.Models;
using amazen_server.Services;
using Microsoft.AspNetCore.Mvc;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;

namespace amazen_server.Controllers
{
  public class VaultKeepController : ControllerBase
  {
    private readonly VaultKeepService _vks;

    public VaultKeepController(VaultKeepService vks)
    {
      _vks = vks;
    }
    [HttpPost("{id}")]
    [Authorize]
    public async Task<ActionResult<VaultKeep>> Create(string id, [FromBody] VaultKeep newVaultKeep)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newVaultKeep.CreatorId = userInfo.Id;
        VaultKeep Created = _vks.Create(id, newVaultKeep);
        return Ok(Created);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}