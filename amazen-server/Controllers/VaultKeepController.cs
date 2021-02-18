using System.Threading.Tasks;
using amazen_server.Models;
using amazen_server.Services;
using Microsoft.AspNetCore.Mvc;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;

namespace amazen_server.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VaultKeepController : ControllerBase
  {
    private readonly VaultKeepService _vks;

    public VaultKeepController(VaultKeepService vks)
    {
      _vks = vks;
    }
    [HttpPost("{id}")]
    [Authorize]
    public async Task<ActionResult<VaultKeep>> Create(int id, [FromBody] VaultKeep newVaultKeep)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newVaultKeep.CreatorId = userInfo.Id;
        newVaultKeep.VaultId = id;
        VaultKeep Created = _vks.Create(newVaultKeep);
        return Ok(Created);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpGet("{vaultId}")]

    public async Task<ActionResult<IEnumerable<Keep>>> Get(int vaultId)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_vks.GetByVaultId(vaultId, userInfo?.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpDelete("{id}")]
    [Authorize]
    public async Task<ActionResult<Keep>> Delete(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_vks.Delete(id, userInfo.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}