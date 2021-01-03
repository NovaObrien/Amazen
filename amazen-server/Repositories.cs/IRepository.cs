using System.Collections.Generic;

namespace amazen_server.Repositories
{
  public interface IRepository<T>
  {
    int Create(T t);
    // T FindById(int id);
    List<T> Find();

    // bool Delete(int id);
  }
}