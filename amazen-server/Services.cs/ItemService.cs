using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using amazen_server.Models;
using amazen_server.Repositories;

namespace amazen_server.Services
{
  public class ItemService
  {
    private readonly ItemRepository _repo;

    public ItemService(ItemRepository repo)
    {
      _repo = repo;
    }
    public Item Create(Item newItem)
    {
      newItem.Id = _repo.Create(newItem);
      return newItem;
    }

    public IEnumerable<Item> Get()
    {
      return _repo.Get();
    }

    internal IEnumerable<Item> GetBlogsByProfile(string profId, string userId)
    {
      return _repo.getBlogsByProfile(profId).ToList().FindAll(b => b.CreatorId == userId || b.IsPublished);
    }

    internal Item Edit(Item editData, string userId)
    {
      Item original = _repo.GetOne(editData.Id);
      if (original == null) { throw new Exception("Bad Id"); }
      if (original.CreatorId != userId)
      {
        throw new Exception("Not the User : Access Denied");
      }
      _repo.Edit(editData);

      return _repo.GetOne(editData.Id);

    }
  }
}