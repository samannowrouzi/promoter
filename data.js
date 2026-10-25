/*
  ============================================================================
  تنظیمات محاسبه‌گر پاداش هفتگی
  ============================================================================
  فقط همین فایل را برای تغییر آستانه‌ها و مبالغ ویرایش کنید.

  قالب پله امتیاز:   { min: عدد, score: امتیاز }
  قالب پله پرداخت:   { min: حداقل امتیاز, max: حداکثر امتیاز, amount: مبلغ }

  payoutBase:
    "active" → مبلغ کل = تعداد راننده رایدشده × مبلغ هر ثبت‌نام  (باکس و سواری)
    "total"  → مبلغ کل = تعداد کل ثبت‌نام‌ها × مبلغ هر ثبت‌نام   (وانت)

  نکته: در پله‌های امتیاز، آخرین آستانه‌ای که مقدار ورودی به آن برسد انتخاب می‌شود.
  ============================================================================
*/

window.BONUS_CONFIG = {
  currency: "تومان",

  vehicles: {

    /* ------------------------------- باکس ------------------------------- */
    box: {
      name: "باکس",
      activeLabel: "تعداد راننده رایدشده",
      payoutBase: "active",

      signupTiers: [
        { min: 1, score: 1 },
        { min: 2, score: 2 },
        { min: 3, score: 3 },
        { min: 8, score: 4 },
        { min: 9, score: 5 }
      ],

      activeTiers: [
        { min: 0,   score: 1 },  // ۰ تا کمتر از ۸۵٪
        { min: 85,  score: 2 },  // ۸۵٪ تا کمتر از ۹۵٪
        { min: 95,  score: 3 },  // ۹۵٪ تا کمتر از ۱۰۰٪
        { min: 100, score: 4 }   // ۱۰۰٪
      ],

      weeksTiers: [
        { min: 1, score: 1 },
        { min: 2, score: 2 },
        { min: 3, score: 3 },
        { min: 4, score: 4 }
      ],

      payouts: [
        { min: 2,  max: 3,  amount: 510000 },
        { min: 4,  max: 5,  amount: 530000 },
        { min: 6,  max: 6,  amount: 550000 },
        { min: 7,  max: 7,  amount: 570000 },
        { min: 8,  max: 8,  amount: 590000 },
        { min: 9,  max: 9,  amount: 610000 },
        { min: 10, max: 11, amount: 630000 },
        { min: 12, max: 13, amount: 650000 }
      ]
    },

    /* ------------------------------- وانت ------------------------------- */
    van: {
      name: "وانت",
      activeLabel: "تعداد راننده فعال",
      payoutBase: "total",

      signupTiers: [
        { min: 1, score: 1 },
        { min: 2, score: 2 },
        { min: 3, score: 3 },
        { min: 4, score: 4 },
        { min: 5, score: 5 }
      ],

      activeTiers: [
        { min: 0,   score: 1 },
        { min: 85,  score: 2 },
        { min: 95,  score: 3 },
        { min: 100, score: 4 }
      ],

      weeksTiers: [
        { min: 1, score: 1 },
        { min: 2, score: 2 },
        { min: 3, score: 3 },
        { min: 4, score: 4 }
      ],

      payouts: [
        { min: 2,  max: 3,  amount: 360000 },
        { min: 4,  max: 5,  amount: 380000 },
        { min: 6,  max: 6,  amount: 400000 },
        { min: 7,  max: 7,  amount: 420000 },
        { min: 8,  max: 8,  amount: 440000 },
        { min: 9,  max: 9,  amount: 460000 },
        { min: 10, max: 11, amount: 480000 },
        { min: 12, max: 13, amount: 500000 }
      ]
    },

    /* ------------------------------- سواری ------------------------------ */
    car: {
      name: "سواری",
      activeLabel: "تعداد راننده فعال",
      payoutBase: "active",

      signupTiers: [
        { min: 1,  score: 1 },
        { min: 4,  score: 2 },
        { min: 7,  score: 3 },
        { min: 12, score: 4 },
        { min: 13, score: 5 }
      ],

      activeTiers: [
        { min: 0,   score: 1 },
        { min: 85,  score: 2 },
        { min: 95,  score: 3 },
        { min: 100, score: 4 }
      ],

      weeksTiers: [
        { min: 1, score: 1 },
        { min: 2, score: 2 },
        { min: 3, score: 3 },
        { min: 4, score: 4 }
      ],

      payouts: [
        { min: 2,  max: 3,  amount: 600000 },
        { min: 4,  max: 5,  amount: 620000 },
        { min: 6,  max: 6,  amount: 640000 },
        { min: 7,  max: 7,  amount: 660000 },
        { min: 8,  max: 8,  amount: 680000 },
        { min: 9,  max: 9,  amount: 700000 },
        { min: 10, max: 11, amount: 720000 },
        { min: 12, max: 13, amount: 750000 }
      ]
    }

  }
};