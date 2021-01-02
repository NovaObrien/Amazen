namespace amazen_server.Models
{
  public class Vault
  {
    public int Id { get; set; }
    public string creatorId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int keepSaves { get; set; }
    public Profile Creator { get; set; }
  }

  public class ProfileVaultViewModel : Vault
  {
    public int ProfileVaultId { get; set; }
  }
}