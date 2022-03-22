#include <stdio.h>
#include <stdlib.h>

char first_character(char *string) {
  //write your code here
}

int main(int argc, char *argv[])
{
  char *buffer = NULL;
  int read;
  unsigned int len;
  char first_char;

  read = getline(&buffer, &len, stdin);
  if (-1 == read)
    printf("No line read...\n");
  first_char = first_character(buffer);
  printf("%c", first_char);
  free(buffer);
  return 0;
}