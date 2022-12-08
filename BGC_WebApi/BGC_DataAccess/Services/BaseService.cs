using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class BaseService
{
    public BGCContext BgcContext { get; set; }

    public BaseService(BGCContext context)
    {
        BgcContext = context;
    }
}
