export const consultaPropiedad = async(manzana,lote,suministro)=>{
    const res = await fetch(`https://phplaravel-1030645-3632046.cloudwaysapps.com/api/propiedades/${manzana}/${lote}/${suministro}`)
    const data = res.json();
    return data
}