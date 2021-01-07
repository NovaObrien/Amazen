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

    public Keep FindById(int id)
    {
      throw new NotImplementedException();
    }
    public bool Delete(int id)
    {
      throw new NotImplementedException();
    }

    public Keep Edit(Keep t)
    {
      throw new NotImplementedException();
    }
  }
}