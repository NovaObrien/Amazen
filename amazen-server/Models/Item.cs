namespace amazen_server.Models
{
  public class Item
  {
    public string Name { get; set; }
    public bool IsSold { get; set; }
    public string Cost { get; set; }
    public int Id { get; set; }
    public string CreatorId { get; set; }
    public Profile Creator { get; set; }
  }

  public class CompanyItemViewModel : Item
  {
    public int CompanyItemId { get; set; }
  }
}