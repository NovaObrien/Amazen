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
      UPDATE keeps k 
      SET k.keepSaves = k.keepSaves + 1
      WHERE k.id = @Id;
      ";
      return _db.ExecuteScalar<VaultKeep>(sql, vaultKeep);
    }

    internal VaultKeep FindOne(int id)
    {
      string sql = @"
      SELECT * FROM vaultkeeps WHERE KeepId = @id
      ";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }
    internal bool Delete(int id)
    {
      string sql = @"
      DELETE FROM vaultKeeps WHERE id = @id
      ";
      int valid = _db.Execute(sql, new { id });
      return valid > 0;
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