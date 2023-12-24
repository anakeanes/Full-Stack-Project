#include<stdio.h>

int main (void) {
    printf("Content-Type: text/html\n");
    printf("\n");
    printf("<button>First</button>");
    for (int i  = 0 ; i <= 3; i++)
    {
        printf("<button>%d</button>",i);
    }
    printf("<button>Last</button>");
    return 0;
}
