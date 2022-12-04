using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgSessionGameService
{
    bool Delete(int id);
    IEnumerable<RpgSessionGame> GetAll();
    RpgSessionGame GetById(int id);
    void Insert(RpgSessionGame RpgSessionGame);
    bool Update(int id, RpgSessionGame RpgSessionGame);
}