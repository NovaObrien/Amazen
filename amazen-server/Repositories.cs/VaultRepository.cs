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
      (name, description, creatorId)
      VALUES
      (@Name, @Description, @creatorId);
      SELECT LAST_INSERT_ID();
      ";
      return _db.ExecuteScalar<int>(sql, vault);
    }


    public List<Vault> Find()
    {
      return _db.Query<Vault>(@"
        SELECT * FROM vaults
      ").ToList();
    }

    internal IEnumerable<Vault> getVaultsByProfile(string profId)
    {
      string sql = @"
        SELECT
        vault.*,
        p.*
        FROM vaults vault
        JOIN profiles p ON vault.creatorId = p.id
        WHERE blog.creatorId = @profId; ";
      return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) => { vault.Creator = profile; return vault; }, new { profId }, splitOn: "id");
    }

  }
}