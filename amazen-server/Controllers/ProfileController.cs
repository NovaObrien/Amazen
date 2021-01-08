using System.Collections.Generic;
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
    private readonly KeepService _ks;

    public ProfileController(ProfilesService ps, VaultService vs, KeepService ks)
    {
      _ps = ps;
      _vs = vs;
      _ks = ks;
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
    [HttpGet("{id}")]
    [Authorize]
    public ActionResult<Profile> GetPublicProfile(string id)
    {
      try
      {
        return Ok(_ps.GetPublicProfile(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}/keep")]
    [Authorize]
    public ActionResult<IEnumerable<Keep>> GetProfileKeeps(string id)
    {
      try
      {
        return Ok(_ks.GetKeepsByProfile(id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}/vault")]
    [Authorize]
    public async Task<ActionResult<Profile>> GetVaultsByProfile(string id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_vs.GetVaultsByProfile(id, userInfo?.Id));
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}