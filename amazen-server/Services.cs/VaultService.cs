using System.Collections.Generic;
using System.Linq;
using System;
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

    internal IEnumerable<Vault> GetVaultsByProfile(string profileId, string userId)
    {
      return _repo.getVaultsByProfile(profileId).ToList().FindAll(v => v.CreatorId == userId || v.IsPrivate);
    }
    internal string Delete(int id, string userId)
    {
      Vault data = _repo.Find(id);
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
  }
}
// public List<Vault> Find()
// {
//   return _repo.Find();
// }