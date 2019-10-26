(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{210:function(t,e,a){"use strict";a.r(e);var o=a(0),r=Object(o.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrate application")]),t._v(" "),a("p",[t._v("Migrating an application is to move the "),a("strong",[t._v("application data")]),t._v(" to a new location and then configure it to ensure access after the move.")]),t._v(" "),a("p",[t._v("Migration is an operation that needs to be treated with caution. Before migration, you need to clearly understand the following points:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Moved application data objects")]),t._v(": website source files or database data files")]),t._v(" "),a("li",[a("strong",[t._v("Destination location")]),t._v(": transfer between server directories (local) or external server (external)")])]),t._v(" "),a("p",[t._v("The combination of the migrated object and the destination location forms a variety of migration scenarios. The most common migration scenarios are detailed below:")]),t._v(" "),a("h2",{attrs:{id:"migrate-source-code-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-source-code-locally","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrate source code locally")]),t._v(" "),a("p",[t._v("Assume the folder name of your application is "),a("strong",[t._v("mysite1")]),t._v(" in the directory "),a("em",[t._v("/data/wwwroot")]),t._v(", then you may migrate "),a("strong",[t._v("mysite1")]),t._v(" to the directory "),a("em",[t._v("/data2/wwwroot")]),t._v(", let us define it this way:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("original folder")]),t._v(": "),a("em",[t._v("/data/wwwroot/mysite1")])]),t._v(" "),a("li",[a("strong",[t._v("destination folder")]),t._v(": "),a("em",[t._v("/data2/wwwroot/mysite1")])])]),t._v(" "),a("ol",[a("li",[t._v("Use WinSCP to connect your Instance")]),t._v(" "),a("li",[t._v("Copy the original folder "),a("em",[a("strong",[t._v("mysite1")])]),t._v("  to the destination directory: "),a("em",[t._v("/data2/wwwroot")]),t._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/lamp/lamp-copysite1todata2-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("Modify the "),a("em",[t._v("DocumentRoot, Directory")]),t._v(" items in the VirtualHost segment of "),a("strong",[t._v("vhost.conf")]),t._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/lamp/lamp-modifyvhostdata2-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("Save vhost.conf, and restart service"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Restart Apache service\nsystemctl restart httpd\n")])])])]),t._v(" "),a("li",[t._v("Test the migration, then delete the "),a("strong",[t._v("original folder")])])]),t._v(" "),a("h2",{attrs:{id:"migrate-database-files-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-database-files-locally","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrate Database files locally")]),t._v(" "),a("p",[t._v("There is no special case, we do not recommend migrating database files to another directory on the Server. After all, major cloud platform's disks can be expanded.")]),t._v(" "),a("p",[t._v("If you want change the "),a("router-link",{attrs:{to:"/stack-components.html#mysql"}},[t._v("Database files")]),t._v(" locally, please refer the docs "),a("a",{attrs:{href:"https://support.websoft9.com/docs/mysql/solution-modifydatadir.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MySQL Documentation"),a("OutboundLink")],1)],1),t._v(" "),a("h2",{attrs:{id:"migrate-data-to-data-disk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-data-to-data-disk","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrate /data to Data Disk")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("/data")]),t._v(" folder is on the system disk by default. When you need to transfer to the data disk, the steps are as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Before you start the migration, please be sure to make a data backup")]),t._v(" "),a("li",[t._v("Prepare your data disk and attach it to your Cloud Server")]),t._v(" "),a("li",[t._v("Initialize the data disk")]),t._v(" "),a("li",[t._v("Create a temp folder on your Server, e.g.")]),t._v(" "),a("li",[a("strong",[t._v("Mount")]),t._v(" data disk to the folder "),a("em",[t._v("/temp")])]),t._v(" "),a("li",[t._v("Stop Apache and MySQL services"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl stop httpd mysqld\n")])])])]),t._v(" "),a("li",[t._v("Copy all files under "),a("em",[t._v("/data")]),t._v(" to "),a("em",[t._v("/temp")])])]),t._v(" "),a("blockquote",[a("p",[t._v("If the data is large, the cut or copy may fail")])]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("After the data transfer is completed, "),a("strong",[t._v("umount")]),t._v(" your data disk from "),a("em",[t._v("/temp")]),t._v(" and "),a("strong",[t._v("Mount")]),t._v(" it to "),a("em",[t._v("/data")]),t._v(" again")]),t._v(" "),a("li",[t._v("Start Apache and MySQL"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl start httpd mysqld\n")])])])]),t._v(" "),a("li",[t._v("Test it")])]),t._v(" "),a("blockquote",[a("p",[t._v("Initialize the data disk means you partition and format data disk, these operation are very complex, please refer to chapter of documentation "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Cloud Server"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"migrate-to-another-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-to-another-instance","aria-hidden":"true"}},[t._v("#")]),t._v(" Migrate to another Instance")]),t._v(" "),a("p",[t._v("The migration of applications from one server (original Server) to another (destination Server) is a complex plan. The basic steps are as follows:")]),t._v(" "),a("ol",[a("li",[a("router-link",{attrs:{to:"/stack-deployment.html"}},[t._v("Deploy LAMP")]),t._v(" on the "),a("strong",[t._v("destination Server")]),t._v(".")],1),t._v(" "),a("li",[t._v("Download the application's source code from "),a("strong",[t._v("original Server")]),t._v(" to the local computer through WinSCP, and then upload them to "),a("strong",[t._v("destination Server")]),t._v(".")]),t._v(" "),a("li",[t._v("Export the database from the "),a("strong",[t._v("original Server")]),t._v(" via phpMyAdmin and then import them to "),a("strong",[t._v("destination server")]),t._v(".")]),t._v(" "),a("li",[t._v("Copy the contents of the "),a("strong",[t._v("vhost.conf")]),t._v(" from the "),a("strong",[t._v("original Server")]),t._v(" to the "),a("strong",[t._v("vhost.conf")]),t._v(" of "),a("strong",[t._v("destination server")]),t._v(" .")]),t._v(" "),a("li",[t._v("Save it, tehn restart the Apache service.")]),t._v(" "),a("li",[t._v("Resolve the domain to "),a("strong",[t._v("destination Server")]),t._v(" and wait for the domain resolution to take effect.")]),t._v(" "),a("li",[t._v("Test the availability by visiting the application through your domain name.")]),t._v(" "),a("li",[t._v("Publish the it.")])]),t._v(" "),a("blockquote",[a("p",[t._v("If there are multiple applications on a Server that need to be migrated, it is recommended to migrate amd test one by one.")])])])},[],!1,null,null,null);e.default=r.exports}}]);