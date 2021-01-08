using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class VaultKeepService
  {
    private readonly VaultKeepRepository _repo;

    VaultKeepService(VaultKeepRepository repo)
    {
      _repo = repo;
    }

    public VaultKeep Create(string id, VaultKeep vaultKeep)
    {
      return _repo.Create(id, vaultKeep);
    }

  }
}