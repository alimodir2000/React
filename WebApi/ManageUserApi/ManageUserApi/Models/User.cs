namespace ManageUserApi.Models
{
    public class User
    {
        public int Id { get; set; } // Auto-incremented ID
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
    }
}
