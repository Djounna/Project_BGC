using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IMemberService
{
    Member GetById(int id);
    IEnumerable<Member> GetAll();
    void Insert(Member member);
    bool Update(int id, Member member);
    bool Delete(int id);
}