using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Admin.Models
{
    public class SysUser:UserModel
    {
        public string File { get; set; }
        public bool Gender { get; set; }
        public bool isProfitA { get; set; }
        public bool isProfitB { get; set; }
        public bool isProfitC { get; set; }
    }
}