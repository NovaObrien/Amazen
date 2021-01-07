namespace amazen_server.Models
{
  public class Vault
  {
    public int Id { get; set; }
    public string CreatorId { get; set; }
    public string Title { get; set; }
    public bool IsPrivate { get; set; }
    public Profile Creator { get; set; }
  }

  public class ProfileVaultViewModel : Vault
  {
    public int ProfileVaultId { get; set; }
  }
}