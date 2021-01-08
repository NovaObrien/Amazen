using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using amazen_server.Models;
using amazen_server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace latefall2020_dotnet_bloggr.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class KeepController : ControllerBase
  {
    private readonly KeepService _ks;

    public KeepController(KeepService ks)
    {
      _ks = ks;
    }

    [HttpPost]
    [Authorize]
    public async Task<ActionResult<Keep>> Create([FromBody] Keep newKeep)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        newKeep.CreatorId = userInfo.Id;
        Keep created = _ks.Create(newKeep);
        created.Creator = userInfo;
        return Ok(created);
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet]
    public ActionResult<IEnumerable<Keep>> Get()
    {
      try
      {
        return Ok(_ks.Get());
      }
      catch (System.Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<ActionResult<string>> Delete(int id)
    {
      try
      {
        Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
        return Ok(_ks.Delete(id, userInfo.Id));
      }
      catch (System.Exception e)
      {

        return BadRequest(e.Message);

      }
    }

    //   [HttpPut("{id}")]
    //   [Authorize]
    //   public async Task<ActionResult<Keep>> Edit(int id, [FromBody] Keep editData)
    //   {
    //     try
    //     {
    //       Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
    //       //helpful to check in service if creator is whoever is logged in
    //       editData.Id = id;
    //       return Ok(_ks.Edit(editData, userInfo.Id));
    //     }
    //     catch (System.Exception e)
    //     {
    //       return BadRequest(e.Message);
    //     }
    //   }
  }
}