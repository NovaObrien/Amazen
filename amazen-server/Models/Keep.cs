namespace amazen_server.Models
{
  public class Keep
  {
    public int Id { get; set; }
    public string CreatorId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Img { get; set; }
    public int Views { get; set; }
    // public int Shares { get; set; }
    public int KeepSaves { get; set; }
    public Profile Creator { get; set; }
  }

  // public class VaultKeepViewModel : Keep
  // {
  //   public int VaultItemId { get; set; }
  // }
}