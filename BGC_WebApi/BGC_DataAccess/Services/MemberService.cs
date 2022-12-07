using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class MemberService : BaseService, IMemberService
{
    public MemberService(BGCContext context) : base(context) { }

    public Member GetById(int id)
    {
        return BgcContext.Members.Find(id);
    }

    public IEnumerable<Member> GetAll()
    {
        return BgcContext.Members.ToList();
    }

    public void Insert(Member member)
    {
        BgcContext.Members.Add(member);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, Member member)
    {
        Member toUpdate = BgcContext.Members.Find(id);

        if (toUpdate != null)
        {
            //memberToUpdate.Role = member.Role;
            //memberToUpdate.Name = member.Name;
            toUpdate.Email = member.Email;
            //memberToUpdate.Password = member.Password;

            //BgcContext.Members.Update(member); // Not necessary
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        Member toDelete = BgcContext.Members.Find(id);
        if (toDelete != null)
        {
            BgcContext.Members.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }


}
