using Microsoft.AspNetCore.Mvc;
using ManageUserApi.Data;
using ManageUserApi.Models;
using Microsoft.EntityFrameworkCore;

namespace UserApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
            {
                return BadRequest("User with this email already exists.");
            }

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("User registered successfully.");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers() {
           
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto login)
        {
            var user = _context.Users
                .FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);

            if (user == null)
                return Unauthorized("Invalid email or password.");

            return Ok("Login successful.");
        }
    }
}
