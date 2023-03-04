var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = YangShallowWater","category":"page"},{"location":"#YangShallowWater","page":"Home","title":"YangShallowWater","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for YangShallowWater.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [YangShallowWater]","category":"page"},{"location":"#YangShallowWater.AbstractForcing","page":"Home","title":"YangShallowWater.AbstractForcing","text":"AbstractForcing\n\nAbstract supertype for different parameter inputs (i.e., forcing, convection, etc.)\n\n\n\n\n\n","category":"type"},{"location":"#YangShallowWater.AbstractModel","page":"Home","title":"YangShallowWater.AbstractModel","text":"AbstractModel\n\nAbstract supertype for different models that YangShallowWater can run.\n\n\n\n\n\n","category":"type"},{"location":"#YangShallowWater.Forcing1D","page":"Home","title":"YangShallowWater.Forcing1D","text":"YSWParams\n\nAbstract supertype for different parameter inputs (i.e., forcing, convection, etc.)\n\n\n\n\n\n","category":"type"},{"location":"#YangShallowWater.YSWParams","page":"Home","title":"YangShallowWater.YSWParams","text":"YSWParams\n\nAbstract supertype for different parameter inputs (i.e., forcing, convection, etc.)\n\n\n\n\n\n","category":"type"},{"location":"#YangShallowWater.addforcing!-Tuple{Any, Any, Any, Any, Any, YangShallowWater.SimpleParams, Any}","page":"Home","title":"YangShallowWater.addforcing!","text":"addforcing!(N, sol, t, clock, vars, params, grid)\n\nAdd forcing (if applicable) to the ϕ tendency, i.e., the 3rd component of N.\n\n\n\n\n\n","category":"method"},{"location":"#YangShallowWater.calcN!-Tuple{Any, Any, Any, Any, YangShallowWater.SpectralVars, Any, TwoDGrid}","page":"Home","title":"YangShallowWater.calcN!","text":"calcN!(N, sol, t, clock, vars :: SpectralVars, params, grid :: TwoDGrid)\n\nCalculate the tendency and stores them in N. The tendencies are computed via calcN_swe! and addforcing!.\n\n\n\n\n\n","category":"method"},{"location":"#YangShallowWater.calcN_swe!-Tuple{Any, Any, Any, Any, YangShallowWater.SpectralVars, Any, TwoDGrid}","page":"Home","title":"YangShallowWater.calcN_swe!","text":"calcN_swe!(N, sol, t, clock, vars :: SpectralVars, params, grid :: TwoDGrid)\n\nCalculate the linear shallow-water dynamics tendencies and stores them in N.\n\n\n\n\n\n","category":"method"}]
}