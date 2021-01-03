using System.Collections.Generic;
using System.Linq;
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
      return _repo.Find();
    }

    internal IEnumerable<Vault> GetVaultsByProfile(string profId, string userId)
    {
      return _repo.getVaultsByProfile(profId).ToList().FindAll(v => v.creatorId == userId || v.isPublic);
    }
  }
}