using System.Collections.Generic;
using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class VaultService : IService<Vault>
  {
    private readonly VaultRepository _repo;

    public VaultService(VaultRepository repo)
    {
      _repo = repo;
    }
    public Vault Create(Vault newVault)
    {
      newVault.Id = _repo.Create(newVault);
      return newVault;
    }


    public List<Vault> Find()
    {
      throw new System.NotImplementedException();
    }

    public Vault FindById(int id)
    {
      throw new System.NotImplementedException();
    }
    public bool Delete(int id)
    {
      throw new System.NotImplementedException();
    }

    public Vault Edit(Vault t)
    {
      throw new System.NotImplementedException();
    }
  }
}