import {Canvas2dGraphics} from './sandycanvasModule.js';


var canvas=document.getElementById('canvas');
var canvavGraphics=new Canvas2dGraphics(canvas);
canvavGraphics.Background();
canvavGraphics.StrokeLine(50,50,200,200);
canvavGraphics.StrokePloygon(100,300,10,50);
canvavGraphics.StrokeTriangle(10,150,2,200,60,170,"#ff00ff",5);
canvavGraphics.StrokeRectangle(150,150,100,100,"#ff00ff",10);
canvavGraphics.FillRectangle(250,250,50,50);
canvavGraphics.StrokeCircle(200,200,50,0,Math.PI*2,false,"#0000ff",5);
canvavGraphics.StrokeEllipse(300,50,100,50,-0.2,0,Math.PI*2,true);
canvavGraphics.FillTriangle(300,150,280,200,360,170);
canvavGraphics.FillPolygon(150,350,10,50);
canvavGraphics.FillEllipse(300,350,50,20,-0.2,0,Math.PI*2,true,"#fff000");
canvavGraphics.FillCircle(350,300,30,0,Math.PI*2,false,"#00ffff");