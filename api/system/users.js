/*
 * Copyright (C) 2017 Nethesis S.r.l.
 * http://www.nethesis.it - nethserver@nethesis.it
 *
 * This script is part of NethServer.
 *
 * NethServer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * NethServer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with NethServer.  If not, see COPYING.
 */

/**
 * Namespace definition
 *
 *
 * @namespace nethserver.system.users
 */
(function(ns){
     // Avoid double-inclusion from sub frames
     if(ns.system.users) {
         return;
     }
     ns.system.users = {};
     /**
      * Generate a random password
      *
      * @function
      * @name nethserver.system.users.mkpasswd
      * @param {Number} length password length
      * @return {Promise.<string>} Randomly generated password of given $length
      */
     ns.system.users.mkpasswd = function(length) {
         // TODO
         return Promise.resolve('Nethesis,1234');
     };
}(nethserver));
