class CharactorInfo {
    constructor(Var0 = 0, Var1 = 0, Var2 = 0, Var3 = 0, Var4 = 0, Var5 = 0, Var6 = 0, Var7 = 0, Var8 = 0, Var9 = 0, Var10 = 0, Var11 = 0, Var12 = 0, Var13 = 0, Var14 = 0, Var15 = 0, Var16 = 0, Var17 = 0, Var18 = 0, Var19 = 0, Var20 = 0, Var21 = 0, Var22 = 0, Var23 = 0, Var24 = 0, Var25 = 0, Var26 = 0, Var27 = 0, Var28 = 0, Var29 = 0, Var30 = 0, Var31 = 0, Var32 = 0, Var33 = 0, Var34 = 0, Var35 = 0, Var36 = 0, Var37 = 0, Var38 = 0, Var39 = 0) {
        this.Var0 = Var0;
        this.Var1 = Var1;
        this.Var2 = Var2;
        this.Var3 = Var3;
        this.Var4 = Var4;
        this.Var5 = Var5;
        this.Var6 = Var6;
        this.Var7 = Var7;
        this.Var8 = Var8;
        this.Var9 = Var9;
        this.Var10 = Var10;
        this.Var11 = Var11;
        this.Var12 = Var12;
        this.Var13 = Var13;
        this.Var14 = Var14;
        this.Var15 = Var15;
        this.Var16 = Var16;
        this.Var17 = Var17;
        this.Var18 = Var18;
        this.Var19 = Var19;
        this.Var20 = Var20;
        this.Var21 = Var21;
        this.Var22 = Var22;
        this.Var23 = Var23;
        this.Var24 = Var24;
        this.Var25 = Var25;
        this.Var26 = Var26;
        this.Var27 = Var27;
        this.Var28 = Var28;
        this.Var29 = Var29;
        this.Var30 = Var30;
        this.Var31 = Var31;
        this.Var32 = Var32;
        this.Var33 = Var33;
        this.Var34 = Var34;
        this.Var35 = Var35;
        this.Var36 = Var36;
        this.Var37 = Var37;
        this.Var38 = Var38;
        this.Var39 = Var39;
    }
    static Load(data) {
        return new CharactorInfo(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35], data[36], data[37], data[38], data[39]);
    }
    Save() {
        return [
            this.Var0, this.Var1, this.Var2, this.Var3, this.Var4,
            this.Var5, this.Var6, this.Var7, this.Var8, this.Var9,
            this.Var10, this.Var11, this.Var12, this.Var13, this.Var14,
            this.Var15, this.Var16, this.Var17, this.Var18, this.Var19,
            this.Var20, this.Var21, this.Var22, this.Var23, this.Var24,
            this.Var25, this.Var26, this.Var27, this.Var28, this.Var29,
            this.Var30, this.Var31, this.Var32, this.Var33, this.Var34,
            this.Var35, this.Var36, this.Var37, this.Var38, this.Var39
        ];
    }
    static dim(num) {
        var data = [];
        for (var i = 0; i < num; i++) {
            data.push(new CharactorInfo());
        }
        return data;
    }
}
class ItemInfo {
    constructor(Var0 = 0, Var1 = 0, Var2 = 0, Var3 = 0, Var4 = 0, Var5 = 0, Var6 = 0, Var7 = 0, Var8 = 0, Var9 = 0, Var10 = 0, Var11 = 0, Var12 = 0, Var13 = 0, Var14 = 0, Var15 = 0, Var16 = 0, Var17 = 0, Var18 = 0, Var19 = 0, Var20 = 0, Var21 = 0, Var22 = 0, Var23 = 0, Var24 = 0, Var25 = 0, Var26 = 0, Var27 = 0, Var28 = 0, Var29 = 0) {
        this.Var0 = Var0;
        this.Var1 = Var1;
        this.Var2 = Var2;
        this.Var3 = Var3;
        this.Var4 = Var4;
        this.Var5 = Var5;
        this.Var6 = Var6;
        this.Var7 = Var7;
        this.Var8 = Var8;
        this.Var9 = Var9;
        this.Var10 = Var10;
        this.Var11 = Var11;
        this.Var12 = Var12;
        this.Var13 = Var13;
        this.Var14 = Var14;
        this.Var15 = Var15;
        this.Var16 = Var16;
        this.Var17 = Var17;
        this.Var18 = Var18;
        this.Var19 = Var19;
        this.Var20 = Var20;
        this.Var21 = Var21;
        this.Var22 = Var22;
        this.Var23 = Var23;
        this.Var24 = Var24;
        this.Var25 = Var25;
        this.Var26 = Var26;
        this.Var27 = Var27;
        this.Var28 = Var28;
        this.Var29 = Var29;
    }
    static Load(data) {
        return new CharactorInfo(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29]);
    }
    Save() {
        return [
            this.Var0, this.Var1, this.Var2, this.Var3, this.Var4,
            this.Var5, this.Var6, this.Var7, this.Var8, this.Var9,
            this.Var10, this.Var11, this.Var12, this.Var13, this.Var14,
            this.Var15, this.Var16, this.Var17, this.Var18, this.Var19,
            this.Var20, this.Var21, this.Var22, this.Var23, this.Var24,
            this.Var25, this.Var26, this.Var27, this.Var28, this.Var29
        ];
    }
    static dim(num) {
        var data = [];
        for (var i = 0; i < num; i++) {
            data.push(new ItemInfo());
        }
        return data;
    }
}
