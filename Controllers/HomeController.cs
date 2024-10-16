using Microsoft.AspNetCore.Mvc;

namespace ClockApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Page2()
        {
            return View();
        }
    }
}
