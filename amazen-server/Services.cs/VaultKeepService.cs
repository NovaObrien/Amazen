using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class VaultKeepService
  {
    private readonly VaultKeepRepository _repo;

    public VaultKeepService(VaultKeepRepository repo)
    {
      _repo = repo;
    }

    public VaultKeep Create(VaultKeep vaultKeep)
    {
      return _repo.Create(vaultKeep);
    }

  }
}