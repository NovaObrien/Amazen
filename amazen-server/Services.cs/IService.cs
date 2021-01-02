using System.Collections.Generic;

namespace amazen_server.Services
{
  public interface IService<T>
  {
    T Create(T t);
    T FindById(int id);
    List<T> Find();
    bool Delete(int id);
    T Edit(T t);
  }
}