export interface MarketData{
    quotes: Quote[];
    links: Link[];
}

export interface Quote{
    listingKey: string;
    fields: Fields;
    links: Link[];
}

export interface Link {
    rel: string;
    href: string;
}

export interface BaseNorm{
    d: Date;
    dly: number;
    gen: number;
    v: number;
    z: number;
}

export interface Fields {
    CLOSE_ADJ_NORM?: BaseNorm;
    LVAL_NORM?: BaseNorm;
    NC2_NORM?: BaseNorm;
    NC2_PR_NORM?: BaseNorm;
    PY_CLOSE?: BaseNorm;
    TUR?: BaseNorm;
    VOL?: BaseNorm;
    YTD_PR_NORM?: BaseNorm;
}

