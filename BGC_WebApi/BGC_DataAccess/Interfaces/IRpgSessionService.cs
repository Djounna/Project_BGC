using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgSessionService
{
    bool Delete(int id);
    IEnumerable<RpgSession> GetAll();
    RpgSession GetById(int id);
    void Insert(RpgSession RpgSession);
    bool Update(int id, RpgSession RpgSession);
}