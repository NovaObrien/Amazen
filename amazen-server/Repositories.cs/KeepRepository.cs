using System.Collections.Generic;
using System.Data;
using amazen_server.Models;
using Dapper;

namespace amazen_server.Repositories
{

  public class KeepRepository : IRepository<Keep>
  {
    private readonly IDbConnection _db;

    public KeepRepository(IDbConnection db)
    {
      _db = db;
    }
    public int Create(Keep keep)
    {
      string sql = @"
      INSERT INTO keeps
      (name, description, img, creatorId)
      VALUES
      (@Name, @Description, @Img, @CreatorId);
      SELECT LAST_INSERT_ID();
      ";
      return _db.ExecuteScalar<int>(sql, keep);
    }
    internal bool Delete(int id)
    {
      string sql = "DELETE FROM keeps WHERE Id = @id";
      int valid = _db.Execute(sql, new { id });
      return valid > 0;
    }
    public Keep FindById(int id)
    {
      string sql = @"SELECT * FROM keeps WHERE id = @id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }
    internal IEnumerable<Keep> Find()
    {
      string sql = @"
      SELECT k.*, 
      p.id AS profileId, 
      p.name AS profileName,
      p.picture,
      p.email
      FROM keeps k
      JOIN profiles p ON p.id = k.creatorId;
      ";
      return _db.Query<Keep, Profile, Keep>(sql, (Keep, profile) => { Keep.Creator = profile; return Keep; }, splitOn: "profileId");
    }
    internal IEnumerable<Keep> GetProfileKeeps(string id)
    {
      string sql = @"SELECT * FROM keeps WHERE creatorId = @Id";
      return _db.Query<Keep>(sql, new { id });
    }
  }
}

