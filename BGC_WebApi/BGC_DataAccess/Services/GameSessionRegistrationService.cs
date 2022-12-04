using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionRegistrationService : BaseService, IGameSessionRegistrationService
{
    public GameSessionRegistrationService(BGCContext context) : base(context) { }

    public GameSessionRegistration GetById(int id)
    {
        return BgcContext.GameSessionRegistrations.Find(id);
    }

    public IEnumerable<GameSessionRegistration> GetAll()
    {
        return BgcContext.GameSessionRegistrations.ToList();
    }

    public void Insert(GameSessionRegistration gameSessionRegistration)
    {
        BgcContext.GameSessionRegistrations.Add(gameSessionRegistration);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, GameSessionRegistration gameSessionRegistration)
    {
        GameSessionRegistration ToUpdate = BgcContext.GameSessionRegistrations.Find(id);

        if (ToUpdate != null)
        {
            ToUpdate.GameSessionId = gameSessionRegistration.GameSessionId;
            ToUpdate.MemberId = gameSessionRegistration.MemberId;

            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameSessionRegistration ToDelete = BgcContext.GameSessionRegistrations.Find(id);
        if (ToDelete != null)
        {
            BgcContext.GameSessionRegistrations.Remove(ToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
