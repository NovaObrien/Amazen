using System.Collections.Generic;
using System.Data;
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
      throw new System.NotImplementedException();
    }

    public Vault FindById(int id)
    {
      throw new System.NotImplementedException();
    }
    public bool Delete(int id)
    {
      throw new System.NotImplementedException();
    }
  }
}