using System.Collections.Generic;
using System.Data;
using amazen_server.Models;
using Dapper;

namespace amazen_server.Repositories
{
  public class VaultKeepRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepRepository(IDbConnection db)
    {
      _db = db;
    }
    public VaultKeep Create(VaultKeep vaultKeep)
    {
      string sql = @"
      INSERT INTO vaultKeeps
      (vaultId, keepId, creatorId)
      VALUES
      (@vaultId, @id, @creatorId);
      ";
      return _db.ExecuteScalar<VaultKeep>(sql, vaultKeep);
    }
    internal IEnumerable<Keep> Find(int vaultId)
    {
      string sql = @"
      SELECT k.*,
      vk.id AS VaultKeepId,
      p.*
      FROM vaultKeeps vk
      JOIN keeps k ON k.id = vk.keepId
      JOIN profiles p ON p.id = k.creatorId
       WHERE VaultId = @vaultId;
      ";



      return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (keep, profile) => { keep.Creator = profile; return keep; }, new { vaultId }, splitOn: "id");
    }
  }
}