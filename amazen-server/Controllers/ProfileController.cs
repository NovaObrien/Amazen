using System.Threading.Tasks;
using amazen_server.Models;
using amazen_server.Services;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace latefall2020_dotnet_bloggr.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ProfileController : ControllerBase
  {
    private readonly ProfilesService _ps;
    private readonly VaultService _vs;

    public ProfileController(ProfilesService ps, VaultService vs)
    {
      _ps = ps;
      _vs = vs;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<Profile>> Get()
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_ps.GetOrCreate(userInfo));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    // [HttpGet("{id}/vault")]
    // public async Task<ActionResult<Profile>> GetVaultsByProfile(string id)
    // {
    //   try
    //   {
    //     Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
    //     return Ok(_vs.GetVaultsByProfile(id, userInfo?.Id));
    //   }
    //   catch (System.Exception e)
    //   {
    //     return BadRequest(e.Message);
    //   }

    // }
  }
}