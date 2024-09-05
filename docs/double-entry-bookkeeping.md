# Double Entry Bookkeeping

What is double entry bookkeeping, how does it work, and why do we use it?

To find the answer to this question, we will pose and explore another:

- How do we track a company's financial transactions?

## A Company's Financials

The first thing we ought to do is start with our baseline definitions: what the heck is a financial transaction? I'll define it as any type of transfer of money or monetary equivalent between two parties. Companies undergo many, many financial transactions over their lifetimes. Let's list off a couple examples:

- A company takes out a loan for $10k
- A company purchases a tractor worth $2k using cash
- A company takes its employees out for a $500 corporate dinner (paying with cash)

If we think about it a little, we can come to the conclusion that each financial transaction is made up of two parts:

1. a source
2. a destination

In all financial transactions, money or a monetary equivalent must originate from one place and end somewhere else!

Let's review the previous scenarios and break them down!

- A company takes out a loan for $10k

  - Source: the bank (which has lent funds)
  - Destination: the company's cash reserves

- A company purchases a tractor worth $2k using cash

  - Source: the company's cash reserves
  - Destination: The monetary value of the company's equipment

- A company takes its employees out for a $500 corporate dinner (paying with cash)

  - Source: cash reserves
  - Destination: The restaurant

When it comes to financial transactions, money is not created out of thin air or destroyed. Money can come from an outside source into the company (first example), be transformed from one form to another (second example), or it can be spent outside the company (third example).

BUT, there will always be a source and a destination. There is an inherit _duality_ of financial transactions.

## A Label to a Location

Every source and destination can be classified into one of 6 categories:

- Dividend
- Expense
- Asset
- Liability
- Equity
- Revenue

Let's quickly match the sources and destinations of the previous examples to these categories:

A reminder: we are tracking these financial transactions as the company, not any other financial institution! Everything is viewed from the vantage point of the company.

- A company takes out a loan for $10k

  - Source: Liability! The company is taking on $10 worth of liability for this cash influx
  - Destination: Asset. Cash reserves are considered an asset of the company

- A company purchases a tractor worth $2k using cash

  - Source: Asset (explained from the previous example)
  - Destination: Asset as well! Equipment is considered an asset of the company.

- A company takes its employees out for a corporate dinner (paying with cash)

  - Source: Asset
  - Destination: Expense. From the company's view, it doesn't matter that the money is going to any particular restaurant -- this expenditure is categorized simply as an expense.

Although we can sub-categorize each source and destination with even more specificity, it is important to know that these 6 categories are the most primary.

## Rises and Falls

You may have noticed something somewhat interesting when matching this source/destination way of thinking about financial transactions to the specific examples I gave in the previous section.

Intuitively, you might think the following:

If funds are sourced from one location and transferred to another, we probably ought to subtract the value of the funds from the number representing the total value of the source and add it to the total value of the destination.

In a lot of cases, this is true! Take the second example: `A company purchases a tractor worth $2k using cash`

I like to think of the source and destination in this situation as two big piles of gold coins. You are siphoning off $2k worth of coins from the pile called "cash reserves" (an asset), and putting them in another pile called "equipment" (another asset). A subtraction from the source, and an addition to the destination.

However, consider the first scenario: `A company takes out a loan for $10k`

Here, when a company takes out a loan, it is _increasing_ its liability. Liability is a financial obligation for how much an entity owes to another, and when someone takes out a loan, their obligation rises. The destination of this fund is to the company's cash reserves, which results in them doing increased. So here, both the source AND the destination are added to. Interesting.

There must be some mathematical relationship between categories that explains this behaviour!

## The Golden Financial Equation

And in fact, there is! We will start with the simplest form of _golden financial equation_, the formula that is the basis for modern financial recordkeeping:

`Equity = Assets - Liability`

This equation makes sense intuitively. Equity is defined as what a company is worth. And at the end of the day, a company is in fact worth the monetary sum of all its assets (cash, property, land, etc) minus all of its liability (anything it owes to another party).

And with a slight tweak, we can create an equivalent expression

`Assets = Equity + Liability`

This equation explains some of the behaviour we noticed in our previous section! Remember example 1 (`A company takes out a loan for $10k`)? Here, we noted that when liability rose, assets rose as well. Take a look, it matches what shows in the equation! An increase on the right side (liability) must match a rise in the left (assets) [^1].

It also matches up with example 2. `A company purchases a tractor worth $2k using cash`. Here, one asset account is decreased while another asset account is increased by the same amount. When we look at the equation, the right hand side is left constant. So the left hand side must be increased and decreased by identical values!

Cool!

But... what about the third example? We discussed how there are 6 categories that financial transactions' funds may be taken from or moved to, not 3!

Turns out that equity is impacted by more than just assets and liability. There are three additional factors that can affect equity: dividends, expenses, and revenue.

Accounting for all 6, we are introduced to the expanded golden financial equation:

`Dividends + Expenses + Assets = Liabilities + Equity + Revenue`

This equation is basis of modern double entry bookkeeping. A common pneumonic for remembering this formula is `DEALER`.

**I don't know how this equation is generated from the previous -- this is something I am actively researching**

Now that all categories are represented, we can understand the 3rd example. `A company takes its employees out for a corporate dinner (paying with cash)`. The company pays with cash (an asset), and it shrinks. The money is moved to an expense, which rises. Assets and expenses are on the same side of the equation, so the math matches the scenario.

## A Model for our System

Now that we know what financial transactions are and the rules under how they operate, its time to revisit our original enquery: how can we track them? Let's propose a system:

To log transactions, we will use tables. To keep as much information as possible, we can create a table per category of financial total we'd like to keep. And because we've learned that every financial transactions source or destination must belong to one of those 6 categories in `DEALER`, we can further label the table as such.

We know that every financial transaction will have a source and a destination. To model this trait fully, we will add two entries in our tables per transaction -- one for the source, and the other for the destination. We know in some cases we need to add to the financial total that we are tracking, and other times we need to subtract. We COULD use positive and negative numbers directly, but (for reasons that will become clearer later) we will use two columns instead. If we put a value to one column (we will mark it with a +), it will represent an addition to the financial total of the table. If we put it in the other (marked with a -), it's considered subtraction.

For the time being, let's say the left column is for addition and the right can be subtraction.

Enough description -- let's run through our examples and try to log them.

`A company takes out a loan for $10k`

We will start with the source: we know that this transaction involves a money movement from a liability to an asset. Again, we are considering the transaction from the perspective of the company. To model this liability, we can introduce a table called "Accounts Payable". Because we are introducing more liability to fund this transaction, we will log the transaction amount in the left column.

Accounts Payable (Liability)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |

And now we need to record the destination. For this transaction we know cash reserves (an asset) are that destination. And we know our assets are going to rise.

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |

Looks good so far, let's keep going.

`The company purchases a tractor worth $2k using cash`

We already know cash (an asset) is the source, and equipment (another asset) is the destination. We will add another row to our cash table and create a new table for equipment. We will see a reduction in cash and an increase in equipment value.

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |
| | 2,000 |

Equipment (Asset)
| (+) | (-) |
| :---: | :-: |
| 2,000 | |

`The company takes its employees out for a corporate dinner for $500 (paying with cash)`

Again, the source is cash (an asset) and the destination is an expense. The value associated with cash will shrink whilst expenses will rise.

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |
| | 2,000 |
| | 500 |

Expenses
| (+) | (-) |
| :----: | :-: |
| 500 | |

And that's our system. It works, but it could be a little better!

## A Second Look

I've been really trying to stress the duality of financial transactions. Given the importance of this concept in understanding how they function, it's crucial that our modeling system clearly reflects this characteristic. Ideally, we'd like to be able to model every financial transaction with one entry in one column of one table, and a complementing entry in the right column of another. This way, every transaction will be added as a pair of source and destination.

If we review the previous section, we will see that in some cases, this happened! In example 2 (`The company purchases a tractor worth $2k using cash`), an asset rose and another asset fell. To model this, we added the fund in the (-) column of one table and a (+) in another.

However, take a look back to example 1 (`A company takes out a loan for $10k`). Here, both liability and an asset rose. This means we needed to add the fund to the (+) columns in both tables.

We can see exactly what is going on if we revisit `DEALER`.

`Dividends + Expenses + Assets = Liabilities + Equity + Revenue`

When we increment a category on the left, there are two things that can happen

1. We can decrement another category on the left to keep the total equal to the right. This will result in an entry to both the (-) and (+) columns.
2. We can similarly increment a category on the right to match the left. Here is the issue -- we need an entry in the (+) column in both tables. This is also true if we choose to decrement both categories.

Operations using categories on the same side fit the system, but when they are on opposite sides, duality is not modeled how we'd like. How can we fix this? With a tricky twist!

We need to swap up how categories on either side of the equals sign interact with one another! To do this, we flip our (-) and (+) columns for tables under categories ONLY on the right side of the equals sign in DEALER (Liabilities, Equity, & Revenue).

Let's roll with the examples:

`A company takes out a loan for $10k`

Here, the source is a liability, and the destination is an asset. The asset category is on the left of the equation, so its table remains the same. Liability, however, is on the right. This means we will use a table with flipped columns to represent it.

Accounts Payable (Liability)
| (-) | (+) |
| :-: | :-: |
| | 10,000 |

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |

Now we can represent this transaction with an entry in both a left and right column! It's working so far!

`The company purchases a tractor worth $2k using cash`

Both categories are assets, and because the asset category is on the left of the equals sign, the tables remain the same as in our previous system.

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |
| | 2,000 |

Equipment (Asset)
| (+) | (-) |
| :---: | :-: |
| 2,000 | |

`The company takes its employees out for a corporate dinner for $500 (paying with cash)`

Same deal, both categories (assets and expenses) are on the left, so the tables remain the same.

Cash (Asset)
| (+) | (-) |
| :----: | :-: |
| 10,000 | |
| | 2,000 |
| | 500 |

Expenses
| (+) | (-) |
| :----: | :-: |
| 500 | |

No matter the transaction, we can log it as 2 entries -- one in each column. And _this_ is what we call modern double entry bookkeeping!

## Putting a Name to the Action

Our system is working how we'd like it to! Let's take one step back and observe three features about this new system:

No matter the transaction, we can and will log it as 2 entries -- one in each column. This observation takes on a literal meaning as well: every fund will have a source and a destination.

And how cool would it be if there was a direct connection between left column / right column and source / destination? Let's review our previous examples and combine information we've already gathered:

`A company takes out a loan for $10k`
source: liability (logged in the right column)
destination: asset (logged in the left column)

`The company purchases a tractor worth $2k using cash`
source: asset (logged in the right column)
destination: asset (logged in the left column)

`The company takes its employees out for a corporate dinner for $500 (paying with cash)`
source: asset (logged in the right column)
destination: expenses (logged in the left column)

And will you look at that! All sources sit in the right columns, whilst destinations are recorded on the left columns!

We have actually assigned names to the act of left column-ing (destining) or right column-ing (sourcing) a transaction: if we want to log on the left, we call this _debiting_ the account. And if we want to log on the right, we call this _crediting_ the account. Additionally, we call accounts that are categorized on the left side of the golden financial equation (dividends, expenses, assets) _debit accounts_, whereas accounts belonging to categories on the right (liabilities, equity, revenue) are called _credit accounts_

Debiting and crediting operate differently based on if we are operating on a debit or credit account. Remember:

To raise the total -> we debit a debit account OR credit a credit account
To lower the total -> we credit a debit account OR debit a credit account

Or in table form:

|           | Debit Accounts | Credit Accounts |
| :-------: | :------------: | :-------------: |
| Debiting  |    increase    |    decrease     |
| Crediting |    decrease    |    increase     |

If you are lost, just remember, debiting = left column-ing and crediting = right column-ing. And because debit accounts and credit accounts use tables with positive and negative columns ordered in opposite ways, opposite columns work out to be the same operation!

Let's go over the examples one final time and describe them using accounting terms:

`A company takes out a loan for $10k`
I will credit "Accounts Receivable" (a liability) and debit "cash" (an asset)

`The company purchases a tractor worth $2k using cash`
I will credit "cash" (an asset) and debit "equipment" (an asset)

`The company takes its employees out for a corporate dinner for $500 (paying with cash)`
I will credit "cash" (an asset) and debit "expense" (an expense)

And now we are talking like accountants!

I'll leave you with one more cool observation: remember earlier how I said money cannot be created nor destroyed? Check it out in the context of double entry bookkeeping! If all financial transactions are properly recorded, the total number of left column entries will always equal the total number of right column entries. This means that after every transaction, we can tally up the number of all left entries and all right entries. If they are equal, we know we have correctly modeled our finances (and no money has mysteriously appeared or disappeared) [2].

## Clearing Some Misconceptions

I've read this in many articles and heard this in many videos, and I think it is important to stress to any readers here as well: _the terms debit and credit should not carry any moral weight_. You might feel inclined to link the term "crediting" to "credit cards", and may view the borrowing they involve as being negative. Remember:

- crediting means "source", not necessarily "money out". For instance, from example 2, you can credit and debit two asset accounts. Or, you can do something like credit an asset and debit revenue. In these cases, money hasn’t left the company -— it’s simply been transferred within it.

- In other words, "debiting" doesn't imply that a company is making money, similar to how "crediting" doesn't mean a company is losing money!

- accruing liability isn't inherently negative! Without immediate capital from loans, most businesses wouldn't be able to get off the ground! Companies must use liability as a tool to be successful and with proper management, liabilities can be controlled to prevent excessive cash outflows from jeopardizing said company. Same can be said about expenses. Advertising, labour cost, and training may be logged as expenses -- each being an essential expenditure for many companies.

Debiting and crediting are not "good" nor "bad". They are simply terms that describe money movement.

---

[^1]: Or, of course, the rise in liability could be matched with a decrease in equity.
[^2]: Yes, if you accidentally create a one-sided entry in one column of one table and a non-related, second one-sided entry in the opposite column (in the same table or another), the tallies of values in each column will be equal and this validation will not work.
