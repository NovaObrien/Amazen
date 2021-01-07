using System.Collections.Generic;
using System.Data;
using System.Linq;
using amazen_server.Models;
using Dapper;

namespace amazen_server.Repositories
{
  public class VaultRepository : IRepository<Vault>
  {
    private readonly IDbConnection _db;

    public VaultRepository(IDbConnection db)
    {
      _db = db;
    }
    public int Create(Vault vault)
    {
      string sql = @"
      INSERT INTO vaults
      (title, isPrivate, creatorId)
      VALUES
      (@Title, @IsPrivate, @CreatorId);
      SELECT LAST_INSERT_ID();
      ";
      return _db.ExecuteScalar<int>(sql, vault);
    }


    public Vault Find(int id)
    {
      string sql = @"SELECT * FROM vaults WHERE id = @id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });
    }

    internal IEnumerable<Vault> getVaultsByProfile(string profileId)
    {
      string sql = @"
        SELECT v.*, p.* FROM vaults v
        JOIN profiles p ON v.CreatorId = p.Id
        WHERE v.CreatorId = @profileId; ";

      return _db.Query<Vault, Profile, Vault>(sql, (v, p) => { v.Creator = p; return v; }, new { profileId }, splitOn: "id");
    }

    internal bool Delete(int id)
    {
      string sql = "DELETE FROM vaults WHERE Id = @id";
      int valid = _db.Execute(sql, new { id });
      return valid > 0;
    }

  }
}