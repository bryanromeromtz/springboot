package com.javamaven.curso.dao;

import com.javamaven.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();
}
