using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class KeepService : IService<Keep>
  {
    private readonly KeepRepository _repo;

    public KeepService(KeepRepository repo)
    {
      _repo = repo;
    }
    public Keep Create(Keep newKeep)
    {
      newKeep.Id = _repo.Create(newKeep);
      return newKeep;

    }
    internal IEnumerable<Keep> Get()
    {
      return _repo.Find();
    }

    internal IEnumerable<Keep> GetKeepsByProfile(string id)
    {
      return _repo.GetProfileKeeps(id);
    }
    internal string Delete(int id, string userId)
    {
      Keep data = _repo.FindById(id);
      if (data == null) { throw new Exception("Bad Id"); }
      if (data.CreatorId != userId)
      {
        throw new Exception("Not user, Access Denied");
      }
      if (_repo.Delete(id))
      {
        return "deleted succesfully";
      }
      return "did not remove succesfully";
    }

    public Keep Edit(Keep t)
    {
      throw new NotImplementedException();
    }
  }
}