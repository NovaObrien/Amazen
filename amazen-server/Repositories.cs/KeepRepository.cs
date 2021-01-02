// using System.Collections.Generic;
// using System.Data;
// using System.Linq;
// using amazen_server.Models;
// using Dapper;

// namespace amazen_server.Repositories
// {
//   public class KeepRepository : IRepository<Keep>
//   {
//     private readonly IDbConnection _db;

//     public KeepRepository(IDbConnection db)
//     {
//       _db = db;
//     }
//     public Keep Create(Keep keep)
//     {
//       int id = _db.ExecuteScalar<int>(@"
//       INSERT INTO keeps (name, description, img)
//       VALUES (@Name, @Description, @Img)
//       SELECT LAST_INSERT_ID()", keep
//       );
//       keep.Id = id;
//       return keep;
//     }

//     public bool Delete(int id)
//     {
//       int success = _db.Execute(@"
//         DELETE FROM keeps WHERE id = @id
//       ", new { id });
//       return success > 0;
//     }

//     public List<Keep> Find()
//     {
//       return _db.Query<Keep>("SELECT * FROM keeps").ToList();
//     }

//     public Keep FindById(int id)
//     {
//       return _db.Query<Keep>("SELECT * FROM quests WHERE id = @id", new { id }).FirstOrDefault();
//     }
//   }
// }