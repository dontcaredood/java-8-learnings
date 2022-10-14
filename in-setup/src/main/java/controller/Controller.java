package controller;

import model.JavaBean;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class Controller {
    @Autowired
    SessionFactory sessionFactory;

    @GetMapping()
    public JavaBean hello(){
        Session ses = this.sessionFactory.openSession();
        JavaBean jb = new JavaBean();
        try{
            Transaction t = ses.beginTransaction();
            String hql = "select * from test-dummy limit 1";
            jb = (JavaBean) ses.createQuery(hql).uniqueResult();
        }catch(Exception e){
            System.out.println("hey");
        }finally{
            ses.close();
        }

        return jb;
    }
}
