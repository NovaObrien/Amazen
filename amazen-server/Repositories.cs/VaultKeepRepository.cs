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
    public VaultKeep Create(string vaultId, VaultKeep vaultKeep)
    {
      string sql = @"
      INSERT INTO vaultKeeps
      (vaultId, keepId, creatorId)
      VALUES
      (@vaultId, @id, @creatorId);
      ";
      return _db.ExecuteScalar<VaultKeep>(sql, vaultKeep);
    }
  }
}