using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgSessionService : BaseService, IRpgSessionService
{
    public RpgSessionService(BGCContext context) : base(context) { }

    public RpgSession GetById(int id)
    {
        return BgcContext.RpgSessions.Find(id);
    }

    public IEnumerable<RpgSession> GetAll()
    {
        return BgcContext.RpgSessions.ToList();
    }

    public void Insert(RpgSession RpgSession)
    {
        BgcContext.RpgSessions.Add(RpgSession);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, RpgSession RpgSession)
    {
        RpgSession toUpdate = BgcContext.RpgSessions.Find(id);

        if (toUpdate != null)
        {
            // TO DO


            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        RpgSession toDelete = BgcContext.RpgSessions.Find(id);
        if (toDelete != null)
        {
            BgcContext.RpgSessions.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
