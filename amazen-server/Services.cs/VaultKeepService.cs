using System;
using System.Collections.Generic;
using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class VaultKeepService
  {
    private readonly VaultKeepRepository _repo;
    private readonly VaultRepository _vr;

    public VaultKeepService(VaultKeepRepository repo, VaultRepository vr)
    {
      _repo = repo;
      _vr = vr;
    }

    public VaultKeep Create(VaultKeep vaultKeep)
    {
      return _repo.Create(vaultKeep);
    }

    internal IEnumerable<Keep> GetByVaultId(int vaultId, string userId)
    {
      Vault vault = _vr.Find(vaultId);
      if (vault == null)
      {
        throw new Exception("Bad Id");
      }
      if (vault.CreatorId != userId || vault.IsPrivate)
      {
        throw new Exception("Not Public you sneaky human");
      }
      else
      {
        return _repo.Find(vaultId);
      }
    }

  }
}