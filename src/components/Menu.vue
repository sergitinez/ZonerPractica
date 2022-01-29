<template>
<div > 

  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-img class="img-fluid" href="/" src="../assets/Logofenix.png" />
    <b-navbar-brand href="#">Z O N E R</b-navbar-brand> 
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="nav-link" to="/Zona" exact>Zona</b-nav-item>
        <b-nav-item class="nav-link" to="/Ofertas" exact>OFERTAS</b-nav-item>
        <b-nav-item class="nav-link" to="/Monitores" exact>Monitores</b-nav-item>
        <b-nav-item class="nav-link" to="/Ratones" exact>Ratones</b-nav-item>
        <b-nav-item class="nav-link" to="/Teclados" exact>Teclados</b-nav-item>
      </b-navbar-nav>

     
    </b-collapse>
  </b-navbar>
</div>
</template>
<style>
 .img-fluid{
   width: 5%;
 };
 .m1 .navbar {
    top: 0;
    width: 100%;
    left: 0;
    position: fixed;
    z-index: 99;
};
.headerbar {
    margin-top: -28px;
}
  .bg-primary{
    background-color: #FF6145!important;
  };
</style>