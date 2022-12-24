/**
 * Clase que representa a un cliente o (actor del sistema)
 *
 * @author Jose Luis Obiang Ela Nanguan
 * @version 1.0
 */


/**
 * constructor parametrizado
 */
class Usuario {
    /**
     * Constructor parametrizado
     *
     * @param {string} dni               Recibe el dni de un usuario
     * @param {string} password         Recibe la contraseña de un usuario
     * @param {string} nombre           Recibe el nombre de un usuario
     * @param {string} apellidos        Recibe los apellidos de un usuario
     * @param {string} direccion        Recibe la direccion de un usuario
     * @param {string} telefono         Recibe el telefono de un usuario
     * @param {string} parentesco             Recibe el parentesco de un usuario
     * @param {date} fechaNacimiento    Recibe la fecha de nacimiento de un usuario
     * @param {string} sexo    Recibe el sexo de un usuario
     */
    constructor(dni, password, nombre, apellidos, direccion, telefono, parentesco, fechaNacimiento, sexo) {

        this.dni = dni;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.parentesco = parentesco;
        this.fechaNacimiento = fechaNacimiento;
    }
}

