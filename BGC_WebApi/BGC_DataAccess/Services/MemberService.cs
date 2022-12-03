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
        Member memberToUpdate = BgcContext.Members.Find(id);

        if (memberToUpdate != null)
        {
            //memberToUpdate.Role = member.Role;
            //memberToUpdate.Name = member.Name;
            memberToUpdate.Email = member.Email;
            //memberToUpdate.Password = member.Password;

            //BgcContext.Members.Update(member); // Not necessary
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        Member memberToDelete = BgcContext.Members.Find(id);
        if (memberToDelete != null)
        {
            BgcContext.Members.Remove(memberToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }


}
